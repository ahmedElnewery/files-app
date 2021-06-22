import PrimaryBtn from '../UI/Button/PrimaryBtn';
// icons
import FolderOutlinedIcon from '@material-ui/icons/FolderOutlined';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import styles from './Header.module.scss'
const Header = ({addNewFolder}) => {
    return ( 
        <div className={styles.headerWapper}>
            <div className={styles.btnGroup}>
            <PrimaryBtn startIcon={<FolderOutlinedIcon/>} onClick={addNewFolder}>
                    New Folder
                </PrimaryBtn>
                <PrimaryBtn startIcon={<ArrowUpwardOutlinedIcon/>}>
                    Upload
                </PrimaryBtn>
            </div>
              
        </div>
     );
}
 
export default Header;