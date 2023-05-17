import Typography from "@mui/material/Typography";
import { forwardRef } from "react";

export const PrimabullBody1 = forwardRef(({ children, className, ...props }, ref) => <Typography {...props} sx={{ color: 'onSurface.main' }} ref={ref} className={className} variant='body1'>{children}</Typography>)
export const PrimabullBody2 = forwardRef(({ children, className, ...props }, ref) => <Typography {...props} sx={{ color: 'onSurface.main' }} className={className} variant='body2'>{children}</Typography>)
PrimabullBody1.displayName = 'PrimabullBody1'
PrimabullBody2.displayName = 'PrimabullBody2'

export const PrimabullH1 = forwardRef(({ children, className, ...props }, ref) => <Typography {...props} sx={{ color: 'onSurface.main' }} className={className} variant='h1'>{children}</Typography>)
export const PrimabullH2 = forwardRef(({ children, className, ...props }, ref) => <Typography {...props} sx={{ color: 'onSurface.main' }} className={className} variant='h2'>{children}</Typography>)
export const PrimabullH3 = forwardRef(({ children, className, ...props }, ref) => <Typography {...props} sx={{ color: 'onSurface.main' }} className={className} variant='h3'>{children}</Typography>)
export const PrimabullH4 = forwardRef(({ children, className, ...props }, ref) => <Typography {...props} sx={{ color: 'onSurface.main' }} className={className} variant='h4'>{children}</Typography>)
export const PrimabullH5 = forwardRef(({ children, className, ...props }, ref) => <Typography {...props} sx={{ color: 'onSurface.main' }} className={className} variant='h5'>{children}</Typography>)
export const PrimabullH6 = forwardRef(({ children, className, ...props }, ref) => <Typography {...props} sx={{ color: 'onSurface.main' }} className={className} variant='h6'>{children}</Typography>)
PrimabullH1.displayName = 'PrimabullH1'
PrimabullH2.displayName = 'PrimabullH2'
PrimabullH3.displayName = 'PrimabullH3'
PrimabullH4.displayName = 'PrimabullH4'
PrimabullH5.displayName = 'PrimabullH5'
PrimabullH6.displayName = 'PrimabullH6'

export const PrimabullSubtitle1 = forwardRef(({ children, className, ...props }, ref) => <Typography {...props} sx={{ color: 'onSurface.main' }} className={className} variant='subtitle1'>{children}</Typography>)
export const PrimabullSubtitle2 = forwardRef(({ children, className, ...props }, ref) => <Typography {...props} sx={{ color: 'onSurface.main' }} className={className} variant='subtitle2'>{children}</Typography>)
PrimabullSubtitle1.displayName = 'PrimabullSubtitle1'
PrimabullSubtitle2.displayName = 'PrimabullSubtitle2'

export const PrimabullCaption = forwardRef(({ children, className, ...props }, ref) => <Typography {...props} ref={ref} sx={{ color: 'onSurface.main' }} className={className} variant='caption' style={{ opacity: '0.8' }}>{children}</Typography>)
PrimabullCaption.displayName = 'PrimabullCaption'

export const PrimabullButtonText = forwardRef(({ children, className, ...props }, ref) => <Typography {...props} sx={{ color: 'onSurface.main' }} className={className} variant='button'>{children}</Typography>)
PrimabullButtonText.displayName = 'PrimabullButtonText'

export const PrimabullOverline = forwardRef(({ children, className, ...props }, ref) => <Typography {...props} sx={{ color: 'onSurface.main' }} className={className} variant='overline'>{children}</Typography>)
PrimabullOverline.displayName = 'PrimabullOverline'



