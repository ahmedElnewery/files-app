import styles from './FileIcon.module.scss'
import ImageIcon from '@material-ui/icons/Image';
const FileIcon = ({type,name}) => {
    
    return ( 
        <div className={styles.fileWrapper}>
            <ImageIcon color="secondary" className={styles.icon} fontSize="large"/>
            <span className={styles.fileName}>{name}</span>
        </div>
     );
}
 
export default FileIcon;