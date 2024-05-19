'use client';
import { useState } from 'react';
import { Input } from '@nextui-org/input';
import { Image } from "@nextui-org/image";

export default function PasswordPage() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <div className="flex flex-col w-full max-w-xs">
            <label htmlFor="passwordInput" className="text-sm font-medium" style={{ color: "#6B7A80" }}>
                Пароль
            </label>
            <div className="relative w-full">
                <Input
                    id="passwordInput"
                    style={{
                        border: "solid 2px #D1D5DB",
                        borderRadius: "5px",
                        height: "50px",
                        paddingLeft: "10px",
                        marginBottom: "10px",
                        width: "330px",
                    }}
                    className="flex justify-center items-center"
                    variant="bordered"
                    placeholder="srlpgs87s"
                    type={isVisible ? 'text' : 'password'}
                />
                <button
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10 focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                >
                    <Image src={isVisible ? "./viewoff.svg" : "./viewoff.svg"}  width="24" height="24" />
                </button>
            </div>
        </div>
    );
}
