<?php $__env->startSection('title', 'Preview Post'); ?>
<?php $__env->startSection('csspath'); ?>
    <link rel="stylesheet" href="<?php echo e(asset('css/show.css')); ?>">
    <?php echo \Livewire\Livewire::styles(); ?>

<?php $__env->stopSection(); ?>
<?php $__env->startSection('content'); ?>

    <div class="post">
        <div class="d-flex justify-content-center">
            <img src="<?php echo e(asset('storage/posts_imgs/'.$post->image)); ?>" alt="Post Image" width="200px">
        </div>
        <div class="post-info">
            <p class="head">Post Info</p>
            <div class="title">
                <span><b>Tiltle: </b></span>
                <span><?php echo e($post->title); ?></span>
            </div>
            <div class="description">
                <p><b>Description:</b></p>
                <p><?php echo e($post->description); ?></p>
            </div>
        </div>
        <div class="post-creator-info">
            <p class="head">Post Creator Info</p>
            <div class="name">
                <span><b>Name: </b></span>
                <span><?php echo e($post->user->name); ?></span>
            </div>
            <div class="email">
                <span><b>Email: </b></span>
                <span><?php echo e($post->user->email); ?></span>
            </div>
            <div class="creation-date">
                <span><b>Created At: </b></span>
                <span><?php echo e($post->user->created_at); ?></span>
            </div>
        </div>
        <?php if(!empty($tags->toArray())): ?>
        <div class="post-tags">
            <p class="head">Post Tags</p>
            <div class="p-3">
            <?php $__currentLoopData = $tags; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $tag): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <span class="bg-opacity-25 bg-secondary px-2 py-1"><?php echo e($tag); ?></span>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </div>
        </div>
        <?php endif; ?>
        <?php
if (! isset($_instance)) {
    $html = \Livewire\Livewire::mount('show-comments', [])->html();
} elseif ($_instance->childHasBeenRendered('u6drKJg')) {
    $componentId = $_instance->getRenderedChildComponentId('u6drKJg');
    $componentTag = $_instance->getRenderedChildComponentTagName('u6drKJg');
    $html = \Livewire\Livewire::dummyMount($componentId, $componentTag);
    $_instance->preserveRenderedChild('u6drKJg');
} else {
    $response = \Livewire\Livewire::mount('show-comments', []);
    $html = $response->html();
    $_instance->logRenderedChild('u6drKJg', $response->id(), \Livewire\Livewire::getRootElementTagName($html));
}
echo $html;
?>

















            <?php
if (! isset($_instance)) {
    $html = \Livewire\Livewire::mount('create-comment', [])->html();
} elseif ($_instance->childHasBeenRendered('xREdhj2')) {
    $componentId = $_instance->getRenderedChildComponentId('xREdhj2');
    $componentTag = $_instance->getRenderedChildComponentTagName('xREdhj2');
    $html = \Livewire\Livewire::dummyMount($componentId, $componentTag);
    $_instance->preserveRenderedChild('xREdhj2');
} else {
    $response = \Livewire\Livewire::mount('create-comment', []);
    $html = $response->html();
    $_instance->logRenderedChild('xREdhj2', $response->id(), \Livewire\Livewire::getRootElementTagName($html));
}
echo $html;
?>






    </div>
    <?php echo \Livewire\Livewire::scripts(); ?>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH E:\ITI 4 month\Labs\laravel\lap3\resources\views/posts/show.blade.php ENDPATH**/ ?>