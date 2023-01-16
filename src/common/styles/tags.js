import Typography from "@mui/material/Typography";
import { forwardRef } from "react";

export const BulkiBody1 = forwardRef(({ children, className, ...props }, ref) => <Typography {...props} ref={ref} className={className} variant='body1'>{children}</Typography>)
export const BulkiBody2 = forwardRef(({ children, className, ...props }, ref) => <Typography {...props} className={className} variant='body2'>{children}</Typography>)
BulkiBody1.displayName = 'BulkiBody1'
BulkiBody2.displayName = 'BulkiBody2'

export const BulkiH1 = forwardRef(({ children, className, ...props }, ref) => <Typography {...props} className={className} variant='h1'>{children}</Typography>)
export const BulkiH2 = forwardRef(({ children, className, ...props }, ref) => <Typography {...props} className={className} variant='h2'>{children}</Typography>)
export const BulkiH3 = forwardRef(({ children, className, ...props }, ref) => <Typography {...props} className={className} variant='h3'>{children}</Typography>)
export const BulkiH4 = forwardRef(({ children, className, ...props }, ref) => <Typography {...props} className={className} variant='h4'>{children}</Typography>)
export const BulkiH5 = forwardRef(({ children, className, ...props }, ref) => <Typography {...props} className={className} variant='h5'>{children}</Typography>)
export const BulkiH6 = forwardRef(({ children, className, ...props }, ref) => <Typography {...props} className={className} variant='h6'>{children}</Typography>)
BulkiH1.displayName = 'BulkiH1'
BulkiH2.displayName = 'BulkiH2'
BulkiH3.displayName = 'BulkiH3'
BulkiH4.displayName = 'BulkiH4'
BulkiH5.displayName = 'BulkiH5'
BulkiH6.displayName = 'BulkiH6'

export const BulkiSubtitle1 = forwardRef(({ children, className, ...props }, ref) => <Typography {...props} className={className} variant='subtitle1'>{children}</Typography>)
export const BulkiSubtitle2 = forwardRef(({ children, className, ...props }, ref) => <Typography {...props} className={className} variant='subtitle2'>{children}</Typography>)
BulkiSubtitle1.displayName = 'BulkiSubtitle1'
BulkiSubtitle2.displayName = 'BulkiSubtitle2'

export const BulkiCaption = forwardRef(({ children, className, ...props }, ref) => <Typography {...props} ref={ref} className={className} variant='caption' style={{ opacity: '0.8' }}>{children}</Typography>)
BulkiCaption.displayName = 'BulkiCaption'

export const BulkiButtonText = forwardRef(({ children, className, ...props }, ref) => <Typography {...props} className={className} variant='button'>{children}</Typography>)
BulkiButtonText.displayName = 'BulkiButtonText'

export const BulkiOverline = forwardRef(({ children, className, ...props }, ref) => <Typography {...props} className={className} variant='overline'>{children}</Typography>)
BulkiOverline.displayName = 'BulkiOverline'



