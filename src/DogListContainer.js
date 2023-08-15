// DO NOT DELETE
import * as React from 'react';
import { useEffect, useState } from 'react';
import { BreedsSelect } from './BreedsSelect';

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true); // 追加: 初期状態はtrueに設定

  useEffect(() => {
    const handleUpdate = () => {
      fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(data => {
          setBreeds(Object.keys(data.message));
          setLoading(false); // APIからデータが取得できたらローディング状態を解除
        })
        .catch(error => {
          console.log(error);
          setLoading(false); // エラーが発生してもローディング状態を解除
        });
    };
    handleUpdate();
  }, []);

  // ローディング状態の間は何も表示しない
  if (loading) {
    return null;
  }

  return (
    <div>
      <BreedsSelect breeds={breeds} /> {/* BreedsSelectコンポーネントに犬種一覧を渡す */}
    </div>
  );
};
