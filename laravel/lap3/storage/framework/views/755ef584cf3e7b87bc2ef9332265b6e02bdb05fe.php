<div>
    <?php if(!empty($comments->toArray())): ?>
    <div class="post-comments">
        <p class="head">Comments</p>
    <?php $__currentLoopData = $comments; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $comment): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <div class="comment">
                <span class="comment-avatar">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                       <path d="M12 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                       <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                    </svg>
                </span>
            <div class="comment-info">
                <p class="comment-body"><?php echo e($comment->comment_body); ?></p>
                <p class="comment-created-at"><?php echo e(\Carbon\Carbon::parse($comment->created_at)->diffForHumans()); ?></p>
            </div>
        </div>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </div>
    <?php endif; ?>
</div>
<?php /**PATH E:\ITI 4 month\Labs\laravel\lap3\resources\views/livewire/show-comments.blade.php ENDPATH**/ ?>