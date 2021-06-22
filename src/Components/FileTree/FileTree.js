import React from 'react';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import FolderIcon from '@material-ui/icons/Folder';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        maxWidth: 400,
        marginTop: 40,
        marginBottom: 40,


    },
    wapper: {
        border: "1px solid #a8a8a8",
        minHeight: '100%',
        padding: "0 20px"

    },
    item: {
        paddingBottom: 10,


    },
    itemWrapper: {
        display: "flex",
        alignItems: "center",
        marginBottom: 10
    },
    icon: {
        marginRight: 10,
        color: "#52616B"
    }
});

export default function FileTree({ setSelecteNodeId,tree }) {
    const classes = useStyles();
   
    const selectedItemHandler = (id) => {
        setSelecteNodeId(id)
    }
    return (
        <div className={classes.wapper}>
            <TreeView
                className={classes.root}
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
            >

                {tree.map(item => <TreeItem key={item.nodeId} nodeId={item.nodeId} label={
                    <div className={classes.itemWrapper}>
                        <span className={classes.icon}>
                            <FolderIcon color="inherit" />
                        </span>
                        <Typography variant="body2" className={classes.labelText}>
                            {item.label}
                        </Typography>
                    </div>
                } className={classes.item} onLabelClick={() => selectedItemHandler(item.nodeId)}
                
                >


                    {item.items.length > 0 && item.items.map(level2Item =>
                        <TreeItem key={level2Item.nodeId} nodeId={level2Item.nodeId} label={
                            <div className={classes.itemWrapper}>

                                <span className={classes.icon}>
                                    <FolderIcon color="inherit" />
                                </span>
                                <Typography variant="body2" className={classes.labelText}>
                                    {level2Item.label}
                                </Typography>
                            </div>
                        } className={classes.item}
                        onLabelClick={() => selectedItemHandler(level2Item.nodeId)}>

                        </TreeItem>

                    )}

                </TreeItem>)}

            </TreeView>
        </div>
    );
}
