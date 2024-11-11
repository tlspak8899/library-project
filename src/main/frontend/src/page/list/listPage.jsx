import axios from 'axios';

const ListPage = () => {
    //함수 정의
    const CreateUserBtn = (e) => {
       alert("답 : "+e);
       axios.post("/createUser",{
        //api 통신해야됨
        })
    };
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="mt-6 grid grid-cols-4 gap-6">
                    <form action="#" method="POST" id="createUser"
                          className="col-span-2 bg-white shadow-xl rounded px-8 pt-6 pb-6 mb-4 border border-gray-200"> {/* shadow-xl을 사용하여 더 진한 그림자 */}
                        <h3 className="text-center text-2xl font-bold tracking-tight text-gray-900 mb-6">사용자 등록</h3>

                        <div className="mb-4 flex flex-col items-center mt-12">
                            <input
                                className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username" type="text" placeholder="이름"/>
                            <p className="text-red-500 text-xs italic">이름을 필수로 작성해주세요.</p>
                        </div>

                        <div className="mb-4 flex flex-col items-center mt-6">
                            <input
                                className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="age" type="text" placeholder="나이"/>
                        </div>

                        <div className="flex items-center justify-center mt-8">
                            <button
                                onSubmit={CreateUserBtn}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit">
                                저장
                            </button>
                        </div>
                    </form>

                    <form action="#" method="POST" id=""
                          className="col-span-2 bg-white shadow-xl rounded px-8 pt-6 pb-6 mb-4 border border-gray-200">
                        <h3 className="text-center text-2xl font-bold tracking-tight text-gray-900 mb-6">책 등록</h3>

                        <div className="mb-4 flex flex-col items-center mt-12"> {/* mt-6을 사용하여 텍스트 박스를 더 내림 */}
                            <input
                                className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username" type="text" placeholder="책 이름"/>
                            <p className="text-red-500 text-xs italic">책 이름을 필수로 작성해주세요.</p>
                        </div>


                        <div className="flex items-center justify-center mt-8"> {/* mt-8을 사용하여 버튼을 더 내림 */}
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button">
                                저장
                            </button>
                        </div>
                    </form>
                    <form action="#" method="POST" id=""
                          className="col-span-2 bg-white shadow-xl rounded px-8 pt-6 pb-6 mb-4 border border-gray-200">
                        <h3 className="text-center text-2xl font-bold tracking-tight text-gray-900 mb-6">책 대출</h3>

                        <div className="mb-4 flex flex-col items-center mt-12"> {/* mt-6을 사용하여 텍스트 박스를 더 내림 */}
                            <input
                                className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username" type="text" placeholder="이름"/>
                            <p className="text-red-500 text-xs italic">이름을 필수로 작성해주세요.</p>
                        </div>

                        <div className="mb-4 flex flex-col items-center mt-6"> {/* mt-6을 사용하여 텍스트 박스를 더 내림 */}
                            <input
                                className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="age" type="text" placeholder="책 이름"/>
                        </div>

                        <div className="flex items-center justify-center mt-8"> {/* mt-8을 사용하여 버튼을 더 내림 */}
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button">
                                저장
                            </button>
                        </div>
                    </form>
                    <form action="#" method="POST" id=""
                          className="col-span-2 bg-white shadow-xl rounded px-8 pt-6 pb-6 mb-4 border border-gray-200">
                        <h3 className="text-center text-2xl font-bold tracking-tight text-gray-900 mb-6">책 반납</h3>

                        <div className="mb-4 flex flex-col items-center mt-12"> {/* mt-6을 사용하여 텍스트 박스를 더 내림 */}
                            <input
                                className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username" type="text" placeholder="이름"/>
                            <p className="text-red-500 text-xs italic">이름을 필수로 작성해주세요.</p>
                        </div>

                        <div className="mb-4 flex flex-col items-center mt-6"> {/* mt-6을 사용하여 텍스트 박스를 더 내림 */}
                            <input
                                className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="age" type="text" placeholder="책 이름"/>
                        </div>

                        <div className="flex items-center justify-center mt-8"> {/* mt-8을 사용하여 버튼을 더 내림 */}
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
