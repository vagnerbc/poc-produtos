import { Box, SimpleGrid } from "@chakra-ui/react";
import Produto from "components/produto";
// import { useSync } from "hooks/useSync";
import { useEffect } from "react";
import { actions, useDispatch, useSelector } from "store";

export default function Home() {
  const dispatch = useDispatch();
  const produtos = useSelector((state) => state.produtos.produtos);

  useEffect(() => {
    dispatch(actions.produtos.sync());
  }, [dispatch]);

  // useSync(() => {
  //   dispatch(actions.produtos.sync())
  // })

  return (
    <Box w="100%" h="100vh" p={4}>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 4 }} spacing={4}>
        {produtos.map((produto, index) => (
          <Produto produto={produto} key={index} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

/**
 * STATIC GENERATION
 */
// export const getStaticProps: GetStaticProps = async (context) => {
//   const res = await fetch("http://localhost:3000/api/produtos");
//   const json = await res.json();

//   return {
//     props: {
//       produtos: json.produtos,
//     },
//   };
// };

/**
 * SERVER SIDE RENDERING
 */
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const res = await fetch("http://localhost:3000/api/produtos");
//   const json = await res.json();

//   return {
//     props: {
//       produtos: json.produtos,
//     },
//   };
// };
