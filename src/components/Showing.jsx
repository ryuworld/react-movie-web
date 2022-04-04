import { useCallback, useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("hi");
    return () => console.log("bye");
  }, []);
  return <h1>Hello</h1>;
}

function Showing() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev); // 이전 value를 받아온 다음에 그 value의 반대값을 return
  return (
    <div>
      {showing && <Hello />}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default Showing;

//useEffect는 코드를 언제 실행할지 선택하는 기능
/*useEffect는 2개의 func arg가 있으며 첫번째 arg는 우리가 실행시키고 싶은 코드, 두번째는 react가 지켜봐야할 코드이다. 
[]로 비어있으면 실행시키는 코드가 한번만 실행이 되며, 스테이트가 들어가면 스테이트가 변화할때마다 첫번째 코드를 실행한다.
array 형식이기 때문에 여러개가 들어가며 둘중에 하나라도 변화가 일어나면 코드를 실행할 수 있다.*/
