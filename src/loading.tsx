import { Spin } from 'antd';

export default () => {
  return (
    <div className="flex justify-center items-center w-full" style={{height:'1000px'}}>
      <div>
        <Spin />
      </div>
    </div>
  );
};
