import { defineConfig } from 'umi';
import routes from './routes'
import defaultSettings from './defaultSettings'
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
    hash:true,
    title:defaultSettings.title,
    history:{
      type:'hash'
    },
    theme:{
      '@primary-color':defaultSettings.primaryColor
    },
  routes,
  fastRefresh: {},
  locale:{
  	default:'zh-CN',
	antd:false,
	title:false,
	baseNavigator:false,
	baseSeparator:'-'
  },
  dva: {
        immer: true,
	hmr:false
  },
  
});
