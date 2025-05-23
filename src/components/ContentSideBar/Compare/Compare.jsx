import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import { TfiReload } from 'react-icons/tfi';
import styles from './styles.module.scss';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import MyButton from '@components/Button/Button';

function Compare() {
  const { container, buttonWrapper } = styles;
  return (
    <div className={container}>
      <div>
        <HeaderSideBar
          icon={<TfiReload style={{ fontSize: '30px' }} />}
          title={'COMPARE'}
        />
        <ItemProduct />
      </div>
      <div className={buttonWrapper}>
        <MyButton content={'VIEW COMPARE'} />
      </div>
    </div>
  );
}

export default Compare;
