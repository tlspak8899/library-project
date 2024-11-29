import React, { useState, useEffect } from 'react';
import axios from "axios";

const List = () => {
    // 상태 변수 정의
    const [loading, setLoading] = useState(true);
    const [boardList , setBoardList] = useState([]);

    //axios 로 api 호출
/*    const getList = async () => {
        const dataList = (await axios. get('http://localhost:8080/api/getUser')).data;
        setBoardList(dataList);
    }*/
    useEffect(async () => {
        await axios.get('http://localhost:8080/api/getUser')
            .then((res) => {
                setBoardList(res.data)
                console.log("=== 작업 완료 ===")
            })
            .catch((err) => console.log("=== 에러발생 : ",err));
    });

    return (
        <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-semibold text-gray-900 mb-6">게시판</h1>

                {/* 게시판 테이블 */}
                <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">이름</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">나이</th>
{/*                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">작성자</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">작성일</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">상세 보기</th>*/}
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {boardList.map((list) => (
                            <tr>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">{list.name}</td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">{list.age}</td>
{/*                                <td className="px-6 py-4 text-sm text-gray-500">{list.author}</td>
                                <td className="px-6 py-4 text-sm text-gray-500">{list.date}</td>
                                <td className="px-6 py-4 text-sm font-medium text-indigo-600 hover:text-indigo-800">
                                    <button>자세히 보기</button>
                                </td>*/}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};


export default List;
