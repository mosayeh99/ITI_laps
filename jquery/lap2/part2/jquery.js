let taskObj;
let tasksArray;
if (localStorage.Tasks != null) {
    tasksArray = JSON.parse(localStorage.getItem('Tasks'));
} else {
    tasksArray =[];
}

// localStorage.clear();

$('.enter-task button').on('click', function() {
    if ($('.enter-task input').val() != "") {
        taskObj = {
            taskSubject: $('.enter-task input').val(),
            taskStatus: false,
        }
        tasksArray.push(taskObj);
        localStorage.setItem('Tasks', JSON.stringify(tasksArray));
        $('.enter-task input').val('');
        tasksData();
    }
})

tasksData();
function tasksData() {
    let countTask = 0;
    let tasks = "";
    $.each(tasksArray, function(i,e) {
        countTask++;
        if (e.taskStatus == false) {
            tasks += `
            <div class="task">
                <p>${e.taskSubject}</p>
                <button class="done-btn" data-task="${countTask - 1}">Done</button>
                <button class="del-btn" data-task="${countTask - 1}">Delete</button>
            </div>`
        } else {
            tasks += `
            <div class="task done">
                <p class="done">${e.taskSubject}</p>
                <button class="done-btn" data-task="${countTask - 1}">Done</button>
                <button class="del-btn" data-task="${countTask - 1}">Delete</button>
            </div>`
        }

    });
    $('.all-tasks').html(tasks);
}

$(document).ready(function() {
    $(document).on('click', function(e) {
        e.stopPropagation();
        if ($(e.target).hasClass('done-btn')) {
            tasksArray[+$(e.target).data('task')].taskStatus = true;
            localStorage.setItem('Tasks', JSON.stringify(tasksArray));
        } else if ($(e.target).hasClass('del-btn')) {
            tasksArray.splice(+$(e.target).data('task'), 1);
            localStorage.setItem('Tasks', JSON.stringify(tasksArray));
        }
        tasksData();
    })
})