<style>
    .form {
        display: block;
        width: 25%;
    }

    .form__select {
        position: relative;
    }
    .form__select select {
        padding-right: 2.5rem;
    }
    .form__select:after {
        display: block;
        position: absolute;
        top: 50%;
        right: 1.125rem;
        border: 0.0625rem solid #c3c4be;
        border-right: 0;
        border-top: 0;
        margin-top: -0.375rem;
        width: 0.5rem;
        height: 0.5rem;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        pointer-events: none;
        content: "";
    }

    .form__field {
        display: block;
        margin-bottom: 1rem;
    }

    .form__error {
        padding: 0.5rem 0;
        color: #cc4b37;
    }
</style>

<template>
    <form class="form" method="post" action="#" autocomplete="off" novalidate @submit.prevent="onSubmit">
        <div class="form__field">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required minlength="3" maxlength="10" v-model="form.name" @keydown="form.errors.clear('name')">
            <div class="form__error" v-if="form.errors.has('name')">{{ form.errors.get('name') }}</div>
        </div>
        <div class="form__field">
            <label for="genre">Genre</label>
            <div class="form__select">
                <select name="genre" id="genre" required v-model="form.genre" @change="form.errors.clear('genre')">
                    <option value="0">Choose genre</option>
                    <option value="1">Punk</option>
                    <option value="2">Pop</option>
                    <option value="3">Electronic</option>
                </select>
            </div>
            <div class="form__error" v-if="form.errors.has('genre')">{{ form.errors.get('genre') }}</div>
        </div>
        <div>
            <button type="submit" :disabled="form.errors.any()">Save</button>
        </div>
    </form>
</template>

<script>
    import Form from '../models/form';

    export default {
        data: () => {
            return {
                form: new Form(
                    {
                        name: '',
                        genre: 0
                    },
                    {
                        name: 'required|min:3|max:10',
                        genre: 'not_in:0'
                    })
            }
        },
        methods: {
            onSubmit() {
                this.form.submit().then(() => {
                    this.onSuccess();
                }).catch(() => {
                    this.onFail();
                });
            },
            onSuccess() {
                console.log('Append notification!');
            },
            onFail() {
                console.log('Form has errors!');
            }
        }
    }
</script>