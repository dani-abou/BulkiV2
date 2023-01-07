import { useCallback, useEffect } from "react";
import BulkiButton from "../../../components/BulkiButton";
import { ProductBasicInfoForm, ProductDimensionsForm } from "../../../components/BulkiForm/forms/productInfo";
import {
  StyledSubformTitle, StyledDraggableImagesContainer, StyledDraggableImage, StyledImagesInstruction,
  StyledEmptyContents, StyledDropZone, StyledDropZoneContainer, StyledCloseButton, StyledAddImageButton
} from "../style"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useDropzone } from 'react-dropzone'
import Image from "next/image";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { BulkiCaption, BulkiH1 } from "../../../common/styles";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const DraggableImageBox = ({ onDragEnd, onDrop, images, removeImage }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
  return <DragDropContext onDragEnd={onDragEnd}>
    <Droppable droppableId="droppableImages" direction="horizontal">
      {(provided, snapshot) => (
        <StyledDropZoneContainer>
          <StyledDropZone
            {...getRootProps()}
          />
          <StyledDraggableImagesContainer
            $empty={images.length <= 0}
            ref={provided.innerRef}
            $isDragging={snapshot.isDraggingOver}
            {...provided.droppableProps}
          >
            {isDragActive
              ? <DropHere />
              : images.length > 0
                ? images?.map((img, index) => <ProductImage
                  key={img.id}
                  img={img}
                  index={index}
                  removeThisImage={() => removeImage(index)} />)
                : <EmptyMessage droppableProps={provided.droppableProps} rootProps={getRootProps()} />
            }
          </StyledDraggableImagesContainer>

        </StyledDropZoneContainer>

      )}

    </Droppable>
  </DragDropContext>
}

const ProductImage = ({ img, index, removeThisImage }) => (
  <Draggable key={img.name} draggableId={img.name} index={index}>
    {(provided, snapshot) => (

      <StyledDraggableImage ref={provided.innerRef}
        $isDragging={snapshot.isDragging}
        style={provided.draggableProps.style}
        {...provided.draggableProps}
        {...provided.dragHandleProps}>
        <Image
          src={URL.createObjectURL(img)}
          alt={img.name}
          layout='fill'
        />
        <StyledCloseButton onClick={removeThisImage}>
          <CloseRoundedIcon />
        </StyledCloseButton>
      </StyledDraggableImage>
    )}
  </Draggable>
)

const EmptyMessage = ({ droppableProps, rootProps }) => (
  <StyledEmptyContents
    {...droppableProps}
    {...rootProps}>
    <UploadFileIcon sx={{ fontSize: '100px' }} /><br />
    <BulkiCaption>Drop images here!</BulkiCaption>
  </StyledEmptyContents>
)

const DropHere = () => {
  <StyledEmptyContents>
    <BulkiH1>DROP HERE</BulkiH1>
  </StyledEmptyContents>
}

const PRODUCT_INFO_KEYS = ['name', 'description', 'unitDefinition']


const ProductInfo = ({ formControl, formValues, setPageComplete, imageControls }) => {
  const { images, reorderImages, removeImage, addImages } = imageControls;
  useEffect(() => {
    if (PRODUCT_INFO_KEYS.some(key => formValues[key].length === 0) || images.length === 0) {
      setPageComplete(false)
    } else {
      setPageComplete(true)
    }
  }, [formValues, setPageComplete, images])

  //Handles dragging to reorder the images
  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    reorderImages(result.source.index, result.destination.index)
  }

  //Handles dropping a file into the browser
  const onDrop = useCallback(acceptedFile => {
    addImages(acceptedFile[0])
  }, [addImages])

  return <>
    <StyledSubformTitle>Product Details</StyledSubformTitle>
    <ProductBasicInfoForm onChange={formControl} values={formValues} />
    <br />
    <StyledAddImageButton
      onChange={e => addImages(e.target.files)}
      onClick={e => e.target.value = null}
      component="label">
      <input hidden
        accept="image/*" type="file" multiple />
      Add Image
    </StyledAddImageButton>
    <StyledImagesInstruction>Images will be ordered as they appear here.{'\n'}Drag an image to change the order.</StyledImagesInstruction>
    <DraggableImageBox onDragEnd={onDragEnd} onDrop={onDrop} images={images} removeImage={removeImage} />
    <StyledImagesInstruction>*At least one image is required</StyledImagesInstruction>
  </>
}

export default ProductInfo;