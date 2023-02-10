<?php $__env->startSection('title', 'Posts'); ?>
<?php $__env->startSection('csspath'); ?>
    <link rel="stylesheet" href="<?php echo e(asset('css/create.css')); ?>">
<?php $__env->stopSection(); ?>
<?php $__env->startSection('page-content'); ?>

    <h1>Add New Post</h1>
    <form method="POST" action="/posts/store">
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
            <p>Crated At<span class="required">*</span></p>
            <input type="text" name="crated-at">
        </div>
        <div class="form-btns">
            <input type="submit" name="addnewpost">
        </div>
</form>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.nav', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH E:\ITI 4 month\Labs\laravel\resources\views/posts/create.blade.php ENDPATH**/ ?>