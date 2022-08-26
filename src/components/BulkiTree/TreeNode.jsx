import PropTypes from "prop-types"
import { TreeItem } from '@mui/lab';

let Node_Shape = {
  //The label of this node
  label: PropTypes.string,

  //Unique id is needed for better tree control, for expanded and selected
  id: PropTypes.string.isRequired,

  //Icon beside node -- also always shown when collapsed
  icon: PropTypes.element,

  //Icon to show when expanded
  collapseIcon: PropTypes.element,

  //Icon to show when expanded
  expandIcon: PropTypes.element,

  //Any additional component -- will be rendered above expanded elements list
  additionalComponent: PropTypes.element,

  defaultEndIcon: PropTypes.element
}
//Array of tree nodes, if undefined
Node_Shape.elements = PropTypes.arrayOf(PropTypes.shape(Node_Shape));

const TreeNode = ({ id, elements, value, defaultEndIcon, additionalComponent, ...props }) => {
  const { icon } = props;
  let collapse;
  let expanded;
  if (!Array.isArray(elements)) {
    expanded = icon || defaultEndIcon
    collapse = icon || defaultEndIcon
  }
  // console.log(!Array.isArray(elements), collapse, defaultEndIcon, id)


  return <TreeItem nodeId={id} collapseIcon={collapse} expandIcon={expanded}{...props} >
    {additionalComponent}
    {Array.isArray(elements) && elements.map(node => <TreeNode key={node.id} defaultEndIcon={defaultEndIcon}{...node} />)
    }
  </TreeItem>
}

TreeNode.propTypes = PropTypes.shape(Node_Shape)

export default TreeNode