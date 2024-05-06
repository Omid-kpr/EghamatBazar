import CardProvider from '@/components/CardProvider'
import Header from '@/components/Header'
import Search from '@/components/Search'
import Wrapper from '@/components/Wrapper'
import ActiveMenu from '@/components/ActiveMenu'
import data from '../fakeDb/fakeData.json';

export default function Home() {
  const activeData = data.filter(item => item.active === true);
  const notActiveData = data.filter(item => item.active === false);
  const activeCount = activeData.length;
  const notActiveCount = notActiveData.length;
  const isActive = true;

  return (
    <>
      <Search />
      <Wrapper>
        <Header />
        <ActiveMenu isActive={isActive} activeCount={activeCount} notActiveCount={notActiveCount} />
        <CardProvider isActive={isActive} data={isActive ? activeData : notActiveData} />
      </Wrapper>
    </>
  )
}
