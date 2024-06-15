import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import dev from '~/assets/img/dev.JPG'

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img src={dev} className={cx('avatar')} alt="Dev"></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Dev Pham</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>devphama</span>
            </div>
        </div>
    );
}

export default AccountItem;
