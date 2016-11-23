import {EventEmitter} from 'events';

import types from 'universal/constants/action-types';
import {subscribe} from 'universal/libs/micro-dispatcher';

const actionTypes = {
  CHANGE_STORE: '__CHANGE_STORE',
  READY_APP: '__READY_APP',
};

class MicroStore extends EventEmitter {
  getState() {
    return Object.assign({}, this.state);
  }
  dispatchChange() {
    this.emit(actionTypes.CHANGE_STORE);
  }
  addChangeListener(listener) {
    this.addListener(actionTypes.CHANGE_STORE, listener);
  }
}

export default class Store extends MicroStore {
  constructor(state) {
    super();

    this.state = Object.assign({
      pathname: '',
      title: '',

      posts: null,
      activities: null,
    }, state);

    this._subscribe();
  }
  _subscribe() {
    subscribe(action => {
      switch (action.type) {
        case types.START_APP:
          this.state.pathname = action.pathname;

          this._dispatchReady();
          break;
        case types.CHANGE_LOCATION:
          this.state.pathname = action.pathname;
          break;
        case types.UPDATE_TITLE:
          this.state.title = action.title;
          break;

        case types.FETCH_POSTS:
          this.state.posts = action.posts;
          break;

        case types.FETCH_ACTIVITIES:
          this.state.activities = action.activities;
          break;
      }

      console.log(action, this.state);
      this.dispatchChange();
    });
  }
  _dispatchReady() {
    this.emit(actionTypes.READY_APP);
  }
  ready(callback) {
    this.addListener(actionTypes.READY_APP, callback);
  }
}
