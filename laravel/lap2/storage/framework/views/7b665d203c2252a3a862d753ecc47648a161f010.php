<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $__env->yieldContent('title'); ?></title>
    <link rel="stylesheet" href="/css/nav.css">
    <?php echo $__env->yieldContent('csspath'); ?>
</head>
<body>
    <header>
        <a href="<?php echo e(route('posts.index')); ?>">CRUD</a>
        <a href="<?php echo e(route('posts.index')); ?>">All Posts</a>
    </header>
    <?php echo $__env->yieldContent('page-content'); ?>
    <?php echo $__env->yieldContent('scripts'); ?>
</body>
</html>
<?php /**PATH E:\ITI 4 month\Labs\laravel\lap2\resources\views/layouts/nav.blade.php ENDPATH**/ ?>