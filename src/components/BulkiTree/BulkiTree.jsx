import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AnchorIcon from '@mui/icons-material/Anchor';
import { TreeView } from '@mui/lab';
import PropTypes from 'prop-types';
import TreeNode, { Node_Shape } from './TreeNode';


const BulkiTree = ({
  tree,
  selected,
  collapseIcon = <ExpandMoreIcon />,
  expandIcon = <ChevronRightIcon />,
  nodeIcon = <AnchorIcon />,
  onNodeSelect,
  className,
  ...props
}) => {
  return <TreeView {...props} sx={{ gap: '30px' }} className={className}
    defaultCollapseIcon={collapseIcon}
    defaultExpandIcon={expandIcon}
    defaultEndIcon={nodeIcon}
    selected={selected}
    onNodeSelect={onNodeSelect}>
    <TreeNode {...tree} parent={true} defaultEndIcon={nodeIcon} />
    <br />
  </TreeView>
}

BulkiTree.propTypes = {
  //The tree array to be printed
  //A tree starts with a node
  tree: Node_Shape,

  //Array of ids of selected nodes
  selected: PropTypes.arrayOf(PropTypes.string),

  //Array of ids of expanded nodes -- if undefined MUI controls 
  expanded: PropTypes.arrayOf(PropTypes.string),

  // Callback when selected
  onNodeSelect: PropTypes.func,

  //Callback when expanded -- if undefined MUI controls
  onNodeToggle: PropTypes.func,

  //Default icon of collapsed element -- gets overriden by node's icon if exists
  collpaseIcon: PropTypes.element,

  //Default icon of expanded element -- gets overriden by node's expandIcon if exists
  expandIcon: PropTypes.element,

  //Default icon node element (undefined children elements) -- gets overriden by node's icon if exists
  nodeIcon: PropTypes.element,


}

export default BulkiTree