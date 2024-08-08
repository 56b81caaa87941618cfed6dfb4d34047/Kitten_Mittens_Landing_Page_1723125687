/* Summary: Describes a footer section of a website. The footer contains the following sections, each of which is a column:
1. The first column includes the company logo, copyright notice, and social media links.
2. The second column lists the products and services offered by the company.
3. The third column provides information about the company, including a blog, careers, and financial statements.
4. The fourth column contains resources for the community, terms of service, and a vulnerability reporting page.
5. The fifth column covers legal information such as the refund policy, terms and conditions, privacy policy, and brand kit.
*/

Vue.component("dark_footer_component_1723125688", {
    template: `
<div class="max-w-6xl mx-auto px-4 sm:px-6 bg-gray-900 p-8 rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold mb-6 text-center text-white">Stake Your Tokens</h2>
    
    <div class="mb-8">
        <p class="text-lg text-gray-300">Staking your tokens helps secure the network and earn rewards. Join our staking community today!</p>
    </div>
    
    <form @submit.prevent="submitStake" class="space-y-6">
        <div>
            <label for="publicKey" class="block text-sm font-medium text-white">ED25519 Public Key</label>
            <input type="text" id="publicKey" v-model="publicKey" required class="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm shadow-sm placeholder-gray-500 text-white
                focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500" placeholder="Enter your ED25519 public key">
        </div>
        
        <div>
            <label for="stakeAmount" class="block text-sm font-medium text-white">Stake Amount</label>
            <input type="number" id="stakeAmount" v-model="stakeAmount" required min="0" step="0.01" class="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm shadow-sm placeholder-gray-500 text-white
                focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500" placeholder="Enter amount to stake">
        </div>
        
        <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            Submit Stake
        </button>
    </form>
</div>`,
    data() {
        return {
            publicKey: '',
            stakeAmount: '',
            textColorPrimary: 'text-gray-900',
            textColorSecondary: 'text-gray-600',
        };
    },
    methods: {
        // Start of submitStake method
        submitStake() {
            // Here you would typically interact with your smart contract
            console.log('Submitting stake:', {
                publicKey: this.publicKey,
                stakeAmount: this.stakeAmount
            });
            // Reset form after submission
            this.publicKey = '';
            this.stakeAmount = '';
        }
        // End of submitStake method
    }
});