//缩放适应全屏的方法
import { useStore } from "vuex"

export function useMain(appRef) {
    const store = useStore()
    // 初始宽高
    const baseWidth = 1920
    const baseHeight = 1080

    let timer = null

    //缩放比例
    const scale = {
        width: 1,
        height: 1,
    }
    const sum = 1
    const calcRate = () => {
        if ((window.innerWidth / window.innerHeight < 1) || (window.innerWidth / window.innerHeight > 3)) {
            return
        }
        scale.width = ((window.innerWidth + sum) / baseWidth).toFixed(5)
        scale.height = ((window.innerHeight + sum) / baseHeight).toFixed(5)
        appRef.style.transform = `scale(${scale.width},${scale.height})`
        store.commit("SETSCALE", scale)
    }
    // 防抖处理
    const resize = () => {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            calcRate()
        }, 200)
    }
    const windowDraw = () => {
        window.addEventListener('resize', resize)
    }


    return {
        calcRate,
        windowDraw
    }
}