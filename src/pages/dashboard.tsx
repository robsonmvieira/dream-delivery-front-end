
import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import DashboardContainer from '../containers/dashboard';
import service from '../utils/http/api';


export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await service.get("suppliers");
  return {
    props: {
      suppliers: data,
    },
  };
};
const DashBoard: NextPage = ({
  suppliers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <DashboardContainer suppliers={suppliers} />
  )
}

export default DashBoard
