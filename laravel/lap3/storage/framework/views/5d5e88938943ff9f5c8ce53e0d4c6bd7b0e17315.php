<?php $__env->startSection('title', 'Update Post'); ?>
<?php $__env->startSection('csspath'); ?>
    <link rel="stylesheet" href="<?php echo e(asset('css/create.css')); ?>">
<?php $__env->stopSection(); ?>
<?php $__env->startSection('page-content'); ?>

    <h1>Update Post</h1>
    <form action="<?php echo e(route('posts.update', $post->id)); ?>" method="post">
        <?php echo method_field('PUT'); ?>
        <?php echo csrf_field(); ?>
        <div class="name">
            <p>Title<span class="required">*</span></p>
            <input type="text" name="title" value="<?php echo e($post->title); ?>">
        </div>
        <div class="email">
            <p>Description<span class="required">*</span></p>
            <textarea name="description"><?php echo e($post->description); ?></textarea>
        </div>
        <div class="crated-at">
            <p>Posted by<span class="required">*</span></p>
            <select name="user_id">
                <?php $__currentLoopData = $users; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $user): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <?php if($user->id === $post->user_id): ?>
                        <option value="<?php echo e($user->id); ?>" name="user_id" selected><?php echo e($user->name); ?></option>
                    <?php else: ?>
                        <option value="<?php echo e($user->id); ?>" name="user_id"><?php echo e($user->name); ?></option>
                    <?php endif; ?>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </select>
        </div>
        <input type="submit" value="Update" class="update-post-btn">
</form>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.nav', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH E:\ITI 4 month\Labs\laravel\lap2\resources\views/posts/edit.blade.php ENDPATH**/ ?>