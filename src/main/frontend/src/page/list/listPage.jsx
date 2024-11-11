const ListPage = () => {

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="mt-6 grid grid-cols-4 gap-6">
                    <form action="#" method="POST" id="createUser"
                          className="col-span-2 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <h3 className="text-center text-2xl font-bold tracking-tight text-gray-900 mb-6">사용자 등록</h3>
                        <div className="mb-4 flex flex-col items-center">
                            <input
                                className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username" type="text" placeholder="이름"/>
                            <p className="text-red-500 text-xs italic">이름을 필수로 작성해주세요.</p>
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                나이
                            </label>
                            <input
                                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password" type="password" placeholder="나이"/>
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button">
                                저장
                            </button>
                        </div>
                    </form>


                    <form action="#" method="POST" id="createUser"
                          className="col-span-2 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <h3 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">책 등록</h3>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                이름
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username" type="text" placeholder="이름"/>
                            <p className="text-red-500 text-xs italic">이름을 필수로 작성해주세요.</p>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                나이
                            </label>
                            <input
                                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password" type="password" placeholder="나이"/>
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button">
                                저장
                            </button>
                        </div>
                    </form>
                    <form action="#" method="POST" id="createUser"
                          className="col-span-2 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <h3 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">책 대출</h3>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                이름
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username" type="text" placeholder="이름"/>
                            <p className="text-red-500 text-xs italic">이름을 필수로 작성해주세요.</p>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                나이
                            </label>
                            <input
                                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password" type="password" placeholder="나이"/>
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button">
                                저장
                            </button>
                        </div>
                    </form>
                    <form action="#" method="POST" id="createUser"
                          className="col-span-2 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <h3 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">책 반납</h3>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                이름
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username" type="text" placeholder="이름"/>
                            <p className="text-red-500 text-xs italic">이름을 필수로 작성해주세요.</p>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                나이
                            </label>
                            <input
                                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password" type="password" placeholder="나이"/>
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button">
                                저장
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ListPage;
