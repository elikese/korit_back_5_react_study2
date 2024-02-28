/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRef, useState } from 'react';

const layout = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const imgLayout = css`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #dbdbdb;
  border-radius: 50%;
  width: 300px;
  height: 300px;
  overflow: hidden;

  & > img {
    width: 100%;
  }
`;

function ImageEx3() {

  const uploadFilesId = useRef(0);
  const imgFileRef = useRef();
  const [loadImages, setLoadImages] = useState([]);

  const handleFileChange = (e) => {
    const loadFiles = Array.from(e.target.files);

    if (loadFiles.length === 0) {
      return;
    }

    const uploadFiles = loadFiles.map(file => {
      return ({
        id: uploadFilesId.current += 1,
        file,
        dataURL: ""
      });
    });

    uploadFilesId.current = 0;

    let promises = [];

    promises = uploadFiles.map(file => {
      return (
        new Promise((resolve) => {
          // 각 promise 객체마다 하나의 fileReader객체 필요함
          const fileReader = new FileReader();

          fileReader.onload = (e) => {
            resolve(e.target.result);
          }

          fileReader.readAsDataURL(file.file);
        })
        )
    })

    Promise.all(promises).then(result => {
      setLoadImages(result.map((urlData, index) => {
        return ({
          ...uploadFiles[index],
          dataURL: urlData
        })
      }));
    });
  }

  return (
    <div css={layout}>
      {loadImages?.map(loadImage => {
        return (
          <div key={loadImage.id} css={imgLayout}>
            <img src={loadImage.dataURL} alt={loadImage.file.name} />
          </div>
        )
      })}
      <input type="file" ref={imgFileRef} style={{ display: "none" }} multiple={true} onChange={handleFileChange} />
      <button onClick={() => { imgFileRef.current.click() }}>불러오기</button>
    </div>
  );
}

export default ImageEx3;