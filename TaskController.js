var TaskController = function (model, view) {
    this.model = model;
    this.view = view;

    this.init();
};

TaskController.prototype = {

    init: function () {
        this.createChildren()
            .setupHandlers()
            .enable();
    },

    createChildren: function () {
        // no need to create children inside the controller
        // this is a job for the view
        // you could all as well leave this function out
        return this;
    },

    setupHandlers: function () {

        this.addTaskHandler = this.addTask.bind(this);
        this.selectTaskHandler = this.selectTask.bind(this);
        this.unselectTaskHandler = this.unselectTask.bind(this);
        this.completeTaskHandler = this.completeTask.bind(this);
        this.deleteTaskHandler = this.deleteTask.bind(this);
        return this;
    },

    enable: function () {
        /*Couple events between  */

        this.view.addTaskEvent.attach(this.addTaskHandler);
        this.view.completeTaskEvent.attach(this.completeTaskHandler);
        this.view.deleteTaskEvent.attach(this.deleteTaskHandler);
        this.view.selectTaskEvent.attach(this.selectTaskHandler);
        this.view.unselectTaskEvent.attach(this.unselectTaskHandler);

        /*Attach task which should after the model have run a task */
        this.model.addTaskEvent.attach(this.view.addTaskHandler);
        this.model.addTaskEvent.attach(this.view.clearTaskTextBoxHandler);
        this.model.setTasksAsCompletedEvent.attach(this.view.setTasksAsCompletedHandler);
        this.model.deleteTasksEvent.attach(this.view.deleteTasksHandler);

        return this;
    },

    /*Same functions for view should go here */
    addTask: function (sender, args) {
        this.model.addTask(args.task);
    },

    selectTask: function (sender, args) {
        this.model.setSelectedTask(args.taskIndex);
    },

    unselectTask: function (sender, args) {
        this.model.unselectTask(args.taskIndex);
    },

    completeTask: function () {
        this.model.setTasksAsCompleted();
    },

    deleteTask: function () {
        this.model.deleteTasks();
    }

};