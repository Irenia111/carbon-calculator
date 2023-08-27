import styled from 'styled-components';
import {
  Table,
  TableBody,
  TableHead,
  TableHeadCell,
  TableRow,
  Window,
  WindowContent,
  WindowHeader,
} from 'react95';
import TransportInput from '../components/TransportInput';
import { useState } from 'react';

const Container = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.desktopBackground};

  .window {
    width: 800px;
    min-height: 200px;
  }

  .window-title {
  }
`;

const transitionList = [
  {
    id: 1,
    title: '🚌 公交车/大巴车/班车',
    rate: 0.0659068034100936,
  },
  {
    id: 2,
    title: '🚇 地铁（包括地上路段）',
    rate: 0.0448375437757093,
  },
  {
    id: 3,
    title: '🚝 轻轨/有轨电车',
    rate: 0.0452375437757093,
  },
  {
    id: 4,
    title: '🚞 城际火车',
    rate: 0.0531528317819727,
  },
  {
    id: 5,
    title: '🛵 电动车',
    rate: 0.04416,
  },
  {
    id: 6,
    title: '🏍 摩托车',
    rate: 0.114831097530665,
  },
  {
    id: 7,
    title: '🚲 自行车/步行',
    rate: 0,
  },
  {
    id: 8,
    title: '🚕 出租车/网约车',
    rate: 0.20826,
  },
  {
    id: 9,
    title: '🚕 顺风车/拼车',
    rate: 0.14876,
  },
  {
    id: 10,
    title: '🚗 私家车（汽油）',
    rate: 0.189042272981471,
  },
  {
    id: 11,
    title: '🚙 私家车（柴油）',
    rate: 0.189214342981471,
  },
  {
    id: 12,
    title: '🛻 私家车（混合动力）',
    rate: 0.11877,
  },
  {
    id: 13,
    title: '🛻 私家车（电动）',
    rate: 0.0514,
  },
] as ITransitionItem[];

const initValue = [
  { id: 1, value: 0.0 },
  { id: 2, value: 0.0 },
  { id: 3, value: 0.0 },
  { id: 4, value: 0.0 },
  { id: 5, value: 0.0 },
  { id: 6, value: 0.0 },
  { id: 7, value: 0.0 },
  { id: 8, value: 0.0 },
  { id: 9, value: 0.0 },
  { id: 10, value: 0.0 },
  { id: 11, value: 0.0 },
  { id: 12, value: 0.0 },
  { id: 13, value: 0.0 },
] as IValueItem[];

interface IValueItem {
  id: number;
  value: number;
}

interface ITransitionItem {
  id: number;
  value: number;
  rate: number;
  title: string;
}

const CarbonCalculator = () => {
  const [inputValueList, setInputValueList] = useState(initValue);
  const [result, setResult] = useState(0);

  const isNumeric = (numStr: string) => {
    return !isNaN(parseFloat(numStr)) && isFinite(Number(numStr));
  };

  const handleInput = (inputValue: string, item: ITransitionItem) => {
    const inputItem = inputValueList.find((valueItem) => valueItem.id === item.id);
    if (!inputItem) return;
    inputItem.value = isNumeric(inputValue) ? Number(inputValue) * item.rate : 0.0;
    setInputValueList(inputValueList);
    setResult(inputValueList.reduce((sum, item) => sum + item.value, 0));
  };

  return (
    <Container>
      <Window className="window">
        <WindowHeader className="window-title">
          <span>通勤碳排计算小工具</span>
        </WindowHeader>
        <WindowContent>
          <p>计算你的通勤碳排放</p>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeadCell>交通方式</TableHeadCell>
                <TableHeadCell>使用该交通方式的出行距离（km）</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transitionList.map((item) => (
                <TransportInput
                  title={item.title}
                  getInputValue={(input: string) => handleInput(input, item)}
                />
              ))}
            </TableBody>
          </Table>
        </WindowContent>
        <span style={{ margin: '0 10px', fontSize: '30px' }}>碳排放量:</span>
        <span style={{ margin: '0 10px', fontSize: '30px', fontWeight: '500' }}> {result} KG</span>
      </Window>
    </Container>
  );
};

export default CarbonCalculator;
