'use client';

import { Image } from "@nextui-org/image";
import { useRouter } from 'next/navigation';

export default function Documents() {
    const router = useRouter();
    const signin = () => {
        router.push('/');
    };

    const documents = [
        { id: 1, date: "03/26/2024", status: "Ожидает подписания", type: "АВР", number: "TR-487/5", organization: "Murray's Discount Auto Stores", dayEnd: "", comment: "", },
        { id: 2, date: "02/18/2024", status: "Подписано Заказчиком", type: "АВР", number: "TR-487/5", organization: "Magna Architectural Design", dayEnd: "", comment: "", },
        { id: 3, date: "03/10/2024", status: "Подписано Заказчиком", type: "АВР", number: "TR-487/5", organization: "Pro Property Maintenance", dayEnd: "", comment: "", },
        { id: 4, date: "04/14/2024", status: "Подписано", type: "АВР", number: "TR-487/5", organization: "Johnson's General Stores", dayEnd: "", comment: "", },
        { id: 5, date: "02/23/2024", status: "В работе", type: "АВР", number: "TR-487/5", organization: "Total Network Development", dayEnd: "", comment: "", },
    ];

    return (
        <div
            className="flex flex-col min-h-screen">
            <div
                className="flex-grow">
                <header
                    className="w-full flex items-center px-5 justify-between bg-white"
                    style={{height: "48px"}}>
                    <div>
                        <Image
                            src="/logo.svg"
                            alt="Логотип"/>
                    </div>
                    <button
                        onClick={signin}
                        className="flex flex-col items-center justify-end">
                        <Image
                            src="/signout.svg"
                            alt="Иконка выхода"/>
                        <span
                            className="text-sm">Выйти</span>
                    </button>
                </header>

                <main>
                    <div>
                        <form
                            className="flex items-center mx-auto mt-5 ml-5">
                            <label
                                htmlFor="simple-search"
                                className="sr-only">Search</label>
                            <div
                                className="relative "
                                style={{width: "313px"}}>
                                <div
                                    className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <Image
                                        src="/search.svg"/>
                                </div>
                                <input
                                    type="text"
                                    id="simple-search"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5"
                                    placeholder="Введите текст"
                                    required/>
                            </div>
                            <button
                                style={{
                                    width: "120px",
                                    backgroundColor: "#00A0E3"
                                }}
                                className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg ">
                                <span
                                    className="sr-only">Search</span>
                                Найти
                            </button>
                        </form>
                    </div>

                    <div
                        className="mt-10">
                        <div
                            className="ml-5 mt-8 mr-32">
                            <h1 className="text-xl font-bold mb-4">Все
                                документы</h1>
                            <div
                                className="overflow-x-auto">
                                <table
                                    className="min-w-full bg-white border border-gray-300 text-sm">
                                    <thead
                                        className="bg-blue-500 text-white">
                                    <tr>
                                        <th className="px-1 py-1 border-r text-left">№</th>
                                        <th className="px-3 py-1 border-r text-left">Дата</th>
                                        <th className="px-3 py-1 border-r text-left">Статус</th>
                                        <th className="px-3 py-1 border-r text-left">Тип</th>
                                        <th className="px-3 py-1 border-r text-left">Номер</th>
                                        <th className="px-3 py-1 border-r text-left">Организация</th>
                                        <th className="px-8 py-1 border-r text-left"></th>
                                        <th className="px-8 py-1 text-left"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {documents.map((doc) => (
                                        <tr key={doc.id}
                                            className="border-b hover:bg-gray-100">
                                            <td className="px-1 py-1 border-r text-left">{doc.id}</td>
                                            <td className="px-3 py-1 border-r text-left">{doc.date}</td>
                                            <td className={`px-3 py-1 border-r text-left ${doc.status === "В работе" ? "text-gray-500" : ""}`}>
                                                {doc.status}
                                            </td>
                                            <td className="px-3 py-1 border-r text-left">{doc.type}</td>
                                            <td className="px-3 py-1 border-r text-left">{doc.number}</td>
                                            <td className="px-3 py-1 border-r text-left">{doc.organization}</td>
                                            <td className="px-3 py-1 border-r text-left">{doc.dayEnd}</td>
                                            <td className="px-3 py-1 text-left">{doc.comment}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            <footer
                className="flex flex-wrap justify-start items-center gap-1 p-2">
                <button
                    className="px-2 py-1 text-xs md:text-sm font-semibold rounded hover:bg-gray-200 disabled:opacity-50">
                    {'|<'}
                </button>
                <button
                    className="px-2 py-1 text-xs md:text-sm font-semibold rounded hover:bg-gray-200 disabled:opacity-50">
                    {'<'}
                </button>
                <button
                    className="px-2 py-1 text-xs md:text-sm rounded bg-gray-300 hover:bg-gray-400 disabled:opacity-50">
                    1
                </button>
                <button
                    className="px-2 py-1 text-xs md:text-sm rounded hover:bg-gray-200 disabled:opacity-50">
                    2
                </button>
                <button
                    className="px-2 py-1 text-xs md:text-sm rounded hover:bg-gray-200 disabled:opacity-50">
                    ...
                </button>
                <button
                    className="px-2 py-1 text-xs md:text-sm rounded hover:bg-gray-200 disabled:opacity-50">
                    5
                </button>
                <button
                    className="px-2 py-1 text-xs md:text-sm font-bold rounded">
                    {'>'}
                </button>
                <button
                    className="px-2 py-1 text-xs md:text-sm font-bold rounded">
                    {'>|'}
                </button>
            </footer>


        </div>
    );
}
