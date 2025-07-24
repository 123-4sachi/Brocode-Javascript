// AI Meeting Summarizer Frontend Logic
const form = document.getElementById('transcriptForm');
const transcriptInput = document.getElementById('transcriptInput');
const summarySection = document.getElementById('summarySection');
const summaryText = document.getElementById('summaryText');
const actionItems = document.getElementById('actionItems');
const newSummaryBtn = document.getElementById('newSummary');

// Mock AI summary and action item generator
function generateSummary(text) {
  // In a real app, this would call an AI API
  return {
    summary: 'This meeting discussed project timelines, assigned tasks, and set deadlines for the next sprint.',
    actions: [
      'Alice to prepare the project plan by Friday.',
      'Bob to review the codebase and report issues.',
      'Team to meet again next Wednesday.'
    ]
  };
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const transcript = transcriptInput.value.trim();
  if (!transcript) return;
  const result = generateSummary(transcript);
  summaryText.textContent = result.summary;
  actionItems.innerHTML = '';
  result.actions.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    actionItems.appendChild(li);
  });
  form.classList.add('hidden');
  summarySection.classList.remove('hidden');
});

newSummaryBtn.addEventListener('click', function() {
  transcriptInput.value = '';
  form.classList.remove('hidden');
  summarySection.classList.add('hidden');
});
