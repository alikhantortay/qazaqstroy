'use client';

import { Image, Input, Button } from '@nextui-org/react';
import Password from '../signin/PasswordInput';
import { useRouter } from 'next/navigation';

export default function Signin() {
    const router = useRouter();
    const documents = () => {
        router.push('/documents');
    };
    return (
        <div className="flex flex-col justify-center items-center min-h-screen overflow-hidden" >
            <div
                style={{
                    width: "570px",
                    height: "521px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "white",
                    padding: "20px",
                }}>
                <div
                    style={{
                        width: "90px",
                        height: "30px",
                        marginBottom: "20px",
                    }}>
                    <Image src='/logo.svg' />
                </div>
                <span className="mb-5 text-xl font-medium">Войти в аккаунт</span>

                <div
                    className="flex flex-col w-full max-w-xs mb-5">
                    <label
                        htmlFor="passwordInput"
                        className="text-sm font-medium"
                        style={{color: "#6B7A80"}}>
                        Логин
                    </label>
                    <Input
                        id="emailInput"
                        style={{
                            border: "solid 2px #D1D5DB",
                            borderRadius: "5px",
                            height: "50px",
                            paddingLeft: "10px",
                            width: "330px",
                        }}
                        type="email"
                        variant="bordered"
                        placeholder="Joshua Jones"
                        className="flex justify-center items-center"
                    />
                </div>

                <Password/>

                <span
                    className="text-sm font-medium"
                    style={{
                        color: "#EB3333",
                        marginBottom: "20px",
                        marginLeft: "-9.5rem",
                        fontSize: "14px",
                    }}
                >
                    Неправильный пароль
                </span>


                <Button onClick={documents} className="" style={{backgroundColor:"#00A0E3", color:"white", width:"330px", height:"48px", borderRadius:"4px"}}>
                    Войти
                </Button>

            </div>
        </div>
    );
}
