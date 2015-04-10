'use strict';



var sequeue = {
  _queues: [],


  /**
   * create a new queue
   *
   * @param {array<function>} list a list of functions
   * @return {number} the id of the queue
   */
  add: function(list) {
    // create queue object
    var queueId = this._queues.length;

    this._queues.push(list.concat(this._remove.bind(this, queueId)));
    process.nextTick(this._next.bind(this, queueId));

    return queueId;
  },

  /**
   * queue is finished so just remove it from the queue list
   *
   * @param {number} queueId id of the queue
   */
  _remove: function(queueId) {
    this._queues[queueId] = undefined;
  },

  /**
   * go to the next step of the queue
   *
   * @param {number} queueId id of the queue
   */
  _next: function(queueId) {
    this._queues[queueId].shift()(this._next.bind(this, queueId));
  }
};

module.exports = sequeue.add.bind(sequeue);
