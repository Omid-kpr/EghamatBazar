import CardProvider from '@/components/Card View/CardProvider'
import Header from '@/components/Header'
import Search from '@/components/Search/Search'
import Wrapper from '@/components/Wrapper'
import ActiveMenu from '@/components/Menu/ActiveMenu'
import ShowMore from '@/components/ShowMore'
import data from '../public/fakeData.json';

export default function Home({ searchParams }) {
  const isActive = searchParams.active === "false" ? false : true;
  const isSearching = searchParams.search
  const endCount = searchParams.endCount === undefined ? 6 : Number(searchParams.endCount);
  let activeData = data.filter(item => item.active === true);
  let notActiveData = data.filter(item => item.active === false);
  const activeCount = activeData.length;
  const notActiveCount = notActiveData.length;
  activeData = activeData.slice(0, endCount);
  notActiveData = notActiveData.slice(0, endCount);


  return (
    <>
      <Search isSearching={isSearching} />
      <Wrapper>
        <Header />
        <ActiveMenu isActive={isActive} activeCount={activeCount} notActiveCount={notActiveCount} />
        <CardProvider data={isActive ? activeData : notActiveData} />
        <ShowMore endCount={endCount} categoryCount={isActive ? activeCount : notActiveCount} />
      </Wrapper>
    </>
  )
}

