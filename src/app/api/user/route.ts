import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { z } from "zod";

//Define a Schema for input validation

const userSchema = z
    .object({
        username: z.string().min(1, 'Username is required').max(100),
        email: z.string().min(1, 'Email is required').email('Invalid email'),
        password: z
            .string()
            .min(1, 'Password is required')
            .min(8, 'Password must have than 8 characters'),
    })


export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {email, username, password} = userSchema.parse(body);
        
        //check if email exisiting or not
        const existingUserEmail = await db.user.findUnique({
            where: {email : email}
        })

        if(existingUserEmail) {
            return NextResponse.json({
                user: null, message: "Email already exists",
            }, {status: 409})
        } 

        //check if username exisiting or not
        const exisitingUsername = await db.user.findUnique({
            where: {username : username}
        })

        if(exisitingUsername) {
            return NextResponse.json({
                user: null, message: 'Username already exists',
            }, {status: 409})
        }

        const hashedPassword = await hash(password, 10)

        const newUser = await db.user.create({
            data: {
                username,
                email,
                password: hashedPassword
            }
        }) 

        const {password: newUserPassword, ...rest} = newUser;

        return NextResponse.json({
            user: newUser,
            message: 'User created successfully',
        }, {status: 201});


    } catch (error) {
        return NextResponse.json({
            message: `Something went wrong while creating user ${error}`,
        }, {status: 500})
    }
}