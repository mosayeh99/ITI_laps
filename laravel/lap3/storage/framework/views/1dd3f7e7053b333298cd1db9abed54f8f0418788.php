<?php $__env->startSection('title', 'Update Post'); ?>
<?php $__env->startSection('csspath'); ?>
    <link rel="stylesheet" href="<?php echo e(asset('css/create.css')); ?>">
<?php $__env->stopSection(); ?>
<?php $__env->startSection('content'); ?>

    <h1>Update Post</h1>
    <form action="<?php echo e(route('posts.update', $post->id)); ?>" method="post" enctype="multipart/form-data">
        <?php echo method_field('PUT'); ?>
        <?php echo csrf_field(); ?>
        <div class="name">
            <p>Title<span class="required">*</span></p>
            <input type="text" name="title" value="<?php echo e($post->title); ?>" class="<?php $__errorArgs = ['title'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>">
            <?php $__errorArgs = ['title'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
            <div class="validate-error-msg"><?php echo e($message); ?></div>
            <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
        </div>
        <div class="email">
            <p>Description<span class="required">*</span></p>
            <textarea name="description" class="<?php $__errorArgs = ['description'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>"><?php echo e($post->description); ?></textarea>
            <?php $__errorArgs = ['description'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
            <div class="validate-error-msg"><?php echo e($message); ?></div>
            <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
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
        <div>
            <p>Tags</p>
            <input type="text" name="tags" value="<?php echo e($tags); ?>">
        </div>
        <div class="d-flex justify-content-center">
            <img src="<?php echo e(asset('storage/posts_imgs/'.$post->image)); ?>" alt="Post Image" width="100px">
        </div>
        <div>
            <input type="file" name="image" class="<?php $__errorArgs = ['image'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>">
            <?php $__errorArgs = ['image'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
            <div class="validate-error-msg"><?php echo e($message); ?></div>
            <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
        </div>
        <div class="d-flex justify-content-end gap-2">
            <a href="/" class="btn btn-outline-secondary d-flex lh-lg">Cancel</a>
            <input type="submit" value="Update" class="update-post-btn">
        </div>
</form>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH E:\ITI 4 month\Labs\laravel\lap3\resources\views/posts/edit.blade.php ENDPATH**/ ?>