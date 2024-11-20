import React from 'react';

// 가상의 목록 데이터
const items = [
    { id: 1, title: 'Item 1', description: 'This is the description of item 1' },
    { id: 2, title: 'Item 2', description: 'This is the description of item 2' },
    { id: 3, title: 'Item 3', description: 'This is the description of item 3' },
    { id: 4, title: 'Item 4', description: 'This is the description of item 4' },
    { id: 5, title: 'Item 5', description: 'This is the description of item 5' },
];

const List = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-semibold text-gray-900 mb-6">목록</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item) => (
                        <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="p-6">
                                <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                                <p className="text-gray-600 mt-2">{item.description}</p>
                            </div>
                            <div className="bg-gray-50 p-4 text-center">
                                <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                                    자세히 보기
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default List;
