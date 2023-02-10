<?php $__env->startSection('title', 'Add New Post'); ?>
<?php $__env->startSection('csspath'); ?>
    <link rel="stylesheet" href="<?php echo e(asset('css/create.css')); ?>">
<?php $__env->stopSection(); ?>
<?php $__env->startSection('page-content'); ?>

    <h1>Add New Post</h1>
    <form method="POST" action="<?php echo e(route('posts.store')); ?>">
        <?php echo csrf_field(); ?>
        <div class="name">
            <p>Title<span class="required">*</span></p>
            <input type="text" name="title">
        </div>
        <div class="email">
            <p>Description<span class="required">*</span></p>
            <textarea name="description"></textarea>
        </div>
        <div class="crated-at">
            <p>Posted by<span class="required">*</span></p>
            <select name="user_id" >
                <?php $__currentLoopData = $users; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $user): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <option value="<?php echo e($user->id); ?>" name="user_id"><?php echo e($user->name); ?></option>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </select>
        </div>
        <input type="submit">
</form>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.nav', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH E:\ITI 4 month\Labs\laravel\lap2\resources\views/posts/create.blade.php ENDPATH**/ ?>