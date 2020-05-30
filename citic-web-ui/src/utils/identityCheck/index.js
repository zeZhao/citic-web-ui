import Vue from "vue";
import identityCheckConfirm from '../../components/public/identityCheckConfirm';

const ROOT_ID = 'identity-check-confirm';

function identityCheck(props = {}) {

    // 如果只传入了一个方法，则默认为成功后的回调
    if(typeof props === 'function'){
        props = {
            success: props,
        }
    }

    props = Object.assign({
        rootId: ROOT_ID,
    }, props);


    const rootDom = document.getElementById(ROOT_ID);
    if (rootDom) {
        rootDom.remove();
    }

    const Instance = new Vue({
        render(h) {
            return h(identityCheckConfirm, {props: props});
        }
    });

    const component = Instance.$mount();
    document.body.appendChild(component.$el);
}

export default identityCheck;
