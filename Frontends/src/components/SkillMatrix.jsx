import React from 'react'
import {ChatGPTIcon,  DockerIcon,  FlaskIcon, GitIcon, 
        HuggingFaceIcon,  JSIcon, KubernetesIcon, MaterialUIIcon, 
        MatplotlibIcon, MongoDBIcon, MSExcelIcon, NextJSIcon, NextJS13Icon, NodeJSIcon, NodeJS1Icon, NPMIcon, 
         PowerBIIcon, PythonIcon, PyTorchIcon, ReactIcon, ReduxIcon , TensorFlowIcon,} from '../Utils/Svg.js'
import { Grid, SvgIcon } from '@mui/material';

const SkillMatrix = () => {
  return (
<Grid container display="flex" direction="row" spacing={2} sx={{height:'600px', width:'600px'}} alignItems='center' justifyContent='center' >
    
        <Grid item display="flex" direction="column" gap={2} >
            <SvgIcon component={ChatGPTIcon} viewBox="0 0 40 40" sx={{fontSize:60}} />
        </Grid> 
        <Grid item display="flex" direction="column" gap={6} >
            <SvgIcon component={DockerIcon} viewBox="0 0 32 32" sx={{fontSize:60}} />
            <SvgIcon component={PythonIcon} viewBox="0 0 256 255" sx={{fontSize:60}} />
        </Grid>
        
        <Grid item display="flex" direction="column" gap={2} >
            <SvgIcon component={NodeJS1Icon} viewBox="0 0 100 180" sx={{fontSize:60}} />
            <SvgIcon component={KubernetesIcon} viewBox="0 0 250 250 " sx={{fontSize:60}} />
            <SvgIcon component={FlaskIcon} viewBox="0 0 230 230" sx={{fontSize:60}} />
            <SvgIcon component={GitIcon} viewBox="0 0 32 32" sx={{fontSize:60}} />
            <SvgIcon component={NodeJSIcon} viewBox="0 0 32 32" sx={{fontSize:60}} />
        </Grid>
        
        <Grid item display="flex" direction="column" gap={2} >
            <SvgIcon component={HuggingFaceIcon} viewBox="0 0 240 240" sx={{fontSize:60}} />
            <SvgIcon component={TensorFlowIcon} viewBox="0 0 1500 3000 " sx={{fontSize:60}} />
            <SvgIcon component={NextJSIcon} viewBox="0 0 1000 1100" sx={{fontSize:60}} />
            <SvgIcon component={ReactIcon} viewBox="0 0 32 32" sx={{fontSize:60}} />
            <SvgIcon component={ReduxIcon} viewBox="0 0 32 32" sx={{fontSize:60}} />
            <SvgIcon component={JSIcon} viewBox="0 0 32 32" sx={{fontSize:60}} />
        </Grid> 
        <Grid item display="flex" direction="column" gap={2} >
            <SvgIcon component={PyTorchIcon} viewBox="0 0 100 10" sx={{fontSize:60}} />
            <SvgIcon component={PowerBIIcon} viewBox="0 0 40 40" sx={{fontSize:60}} />
            <SvgIcon component={MaterialUIIcon} viewBox="0 0 700 700" sx={{fontSize:60}} />
            <SvgIcon component={MatplotlibIcon} viewBox="0 0 320 320" sx={{fontSize:60}} />
            <SvgIcon component={MongoDBIcon} viewBox="0 0 32 32" sx={{fontSize:60}} />
        </Grid>
        <Grid item display="flex" direction="column" gap={6} >
            <SvgIcon component={MSExcelIcon} viewBox="0 0 32 32" sx={{fontSize:60}} />
            <SvgIcon component={NPMIcon} viewBox="0 0 32 32" sx={{fontSize:60}} />
        </Grid>
        <Grid item display="flex" direction="column" gap={2} >
            <SvgIcon component={NextJS13Icon } viewBox="0 0 90 90" sx={{fontSize:60}} />
        </Grid> 
   
</Grid>
  )
}

export default SkillMatrix
