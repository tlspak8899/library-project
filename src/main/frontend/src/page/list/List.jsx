import React from 'react';

// 가상의 게시판 데이터
const posts = [
    { id: 1, title: '게시글 1', author: '작성자 1', date: '2024-11-01', description: '게시글 1의 내용입니다.' },
    { id: 2, title: '게시글 2', author: '작성자 2', date: '2024-11-02', description: '게시글 2의 내용입니다.' },
    { id: 3, title: '게시글 3', author: '작성자 3', date: '2024-11-03', description: '게시글 3의 내용입니다.' },
    { id: 4, title: '게시글 4', author: '작성자 4', date: '2024-11-04', description: '게시글 4의 내용입니다.' },
    { id: 5, title: '게시글 5', author: '작성자 5', date: '2024-11-05', description: '게시글 5의 내용입니다.' },
];

const List = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-semibold text-gray-900 mb-6">게시판</h1>

                {/* 게시판 테이블 */}
                <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">번호</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">제목</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">작성자</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">작성일</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">상세 보기</th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {posts.map((post) => (
                            <tr key={post.id}>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">{post.id}</td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">{post.title}</td>
                                <td className="px-6 py-4 text-sm text-gray-500">{post.author}</td>
                                <td className="px-6 py-4 text-sm text-gray-500">{post.date}</td>
                                <td className="px-6 py-4 text-sm font-medium text-indigo-600 hover:text-indigo-800">
                                </td>
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
