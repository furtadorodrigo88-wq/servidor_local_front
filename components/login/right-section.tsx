import Link from "next/link"
import { Card, CardContent, CardHeader } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"


export const RightSection = () => {
    return (
        <div className="w-1/2 flex flex-col justify-center">
            <Card className="h-full flex flex-col justify-center px-14 gap-16">
                <CardHeader>
                    <span className="text-5xl font-bold">Login</span>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <Label>Email</Label>
                            <Input type="text" placeholder="exanple@gmail.com" className="py-2 text-lg h-10"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Password</Label>
                            <Input type="password" placeholder="Your Password" className="py-2 text-lg h-10"/>
                        </div>
                        <button className="bg-[#13a4ec] text-white rounded-md font-bold py-3 drop-shadow-lg drop-shadow-gray-200">Login</button>
                    </div>
                    <div>
                        <span>Don't have an account yet?</span>
                        <Link href="/registro" className="text-[#13a4ec] font-semibold">Create Account</Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}