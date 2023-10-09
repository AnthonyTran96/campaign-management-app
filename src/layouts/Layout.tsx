import classNames from 'classnames/bind';
import styles from './Layout.module.scss';
import Header from './components/Header';
import Content from './components/Content';

const cx = classNames.bind(styles);

function Layout() {
    return (
        <main className={cx('main')}>
            <Header />
            <Content />
        </main>
    );
}

export default Layout;
