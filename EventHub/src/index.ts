//新建EventHub类并导出   发布订阅模式
class EventHub {
    on(eventName,fn){}       //发布参数1.事件名  2.处理函数
    emit(eventName){}        //订阅
}

export  default EventHub

