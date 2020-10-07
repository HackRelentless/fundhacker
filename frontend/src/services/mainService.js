import Api from '@/services/Api';

export default {
    testGet() {
        console.log('test getting');
        return Api().get('helloworld');
    }
}