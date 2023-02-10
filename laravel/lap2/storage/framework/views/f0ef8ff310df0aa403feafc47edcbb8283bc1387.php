<?php $__env->startSection('title', 'Preview Post'); ?>
<?php $__env->startSection('csspath'); ?>
    <link rel="stylesheet" href="<?php echo e(asset('css/show.css')); ?>">
    <?php echo \Livewire\Livewire::styles(); ?>

<?php $__env->stopSection(); ?>
<?php $__env->startSection('page-content'); ?>

    <div class="post">
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
        <?php
if (! isset($_instance)) {
    $html = \Livewire\Livewire::mount('show-comments', [])->html();
} elseif ($_instance->childHasBeenRendered('osbsQRe')) {
    $componentId = $_instance->getRenderedChildComponentId('osbsQRe');
    $componentTag = $_instance->getRenderedChildComponentTagName('osbsQRe');
    $html = \Livewire\Livewire::dummyMount($componentId, $componentTag);
    $_instance->preserveRenderedChild('osbsQRe');
} else {
    $response = \Livewire\Livewire::mount('show-comments', []);
    $html = $response->html();
    $_instance->logRenderedChild('osbsQRe', $response->id(), \Livewire\Livewire::getRootElementTagName($html));
}
echo $html;
?>

















            <?php
if (! isset($_instance)) {
    $html = \Livewire\Livewire::mount('create-comment', [])->html();
} elseif ($_instance->childHasBeenRendered('BYwdvSM')) {
    $componentId = $_instance->getRenderedChildComponentId('BYwdvSM');
    $componentTag = $_instance->getRenderedChildComponentTagName('BYwdvSM');
    $html = \Livewire\Livewire::dummyMount($componentId, $componentTag);
    $_instance->preserveRenderedChild('BYwdvSM');
} else {
    $response = \Livewire\Livewire::mount('create-comment', []);
    $html = $response->html();
    $_instance->logRenderedChild('BYwdvSM', $response->id(), \Livewire\Livewire::getRootElementTagName($html));
}
echo $html;
?>






    </div>
    <?php echo \Livewire\Livewire::scripts(); ?>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.nav', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH E:\ITI 4 month\Labs\laravel\lap2\resources\views/posts/show.blade.php ENDPATH**/ ?>