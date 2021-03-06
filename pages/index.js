import { useEffect } from 'react';

import Head from 'next/head'
import Image from 'next/image'
import { connect } from 'react-redux'

import { getProductListAction } from '../redux/actions';

import styles from '../styles/Home.module.css'

function HomePage({
  getProductList,
  productList,
}) {
  useEffect(() => {
    getProductList();
  }, [])

  function renderProductList() {
    return productList.data.map((productItem, productIndex) => {
      return (
        <div key={`product-item-${productIndex}`}>{productItem.name}</div>
      )
    })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {renderProductList()}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { productList } = state.productReducer;
  return {
    productList,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getProductList: (params) => dispatch(getProductListAction(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
